import axios from 'axios'
import { useRouter } from 'next/router'
import { Context } from 'vm'
import { User } from '../../../../types/user'
import {GetStaticProps} from 'next'

export interface UserProps {
  user: User
}

function Profile({ user }: UserProps) {
  const router = useRouter()

  if (router.isFallback) return <h1>carregando...</h1>

  return (
    <div>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.username}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
    { params: { id: context.params.id } }
  )
  const user = await response.data[0]

  return {
    props: { user, revalidate: 10 },
  }
}

export async function getStaticPaths() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')

  const paths = users.map((user) => {
    return { params: { id: String(user.id) } }
  })

  return {
    paths,
    fallback: true,
  }
}

export default Profile