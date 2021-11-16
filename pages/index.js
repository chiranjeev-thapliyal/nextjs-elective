import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export const getServerSideProps = async () => {
  const res = await fetch(`https://reqres.in/api/users`);
  const users = await res.json();

  return {
    props: {
      users: users,
    },
  };
};

export default function Home({ users }) {
  return (
    <div className={styles.container}>
      <h1>All Users</h1>
      {users?.data?.map((user) => {
        return (
          <div className={styles.userContainer}>
            <img src={user.avatar} alt={user.first_name} />
            <h3>{user.first_name}</h3>
            <Link href={`/users/` + user.id}>View More</Link>
          </div>
        );
      })}
    </div>
  );
}
