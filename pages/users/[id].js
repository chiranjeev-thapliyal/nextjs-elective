import Link from 'next/link';

export const getStaticPaths = async () => {
  const res = await fetch('https://reqres.in/api/users');
  const data = await res.json();

  const paths = data?.data?.map((users) => {
    return {
      params: { id: users.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://reqres.in/api/users/` + id);
  const data = await res.json();

  return {
    props: { user: data.data },
  };
};

const User = ({ user }) => {
  return (
    <div>
      <img src={user.avatar} alt='' />
      <h3>{user.email}</h3>
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <h3>My id is: {user.id}</h3>
      <Link href='/'>Go Back</Link>
    </div>
  );
};

export default User;
