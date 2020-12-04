import axios from 'axios'
import Link from 'next/link'
import { User } from '../../../types/user';

export interface UsersProps {
  users?: User[]
}

function User({ users }: UsersProps) {
  return (
    <div>
      {users.map((user) => {
        ;<div>
          <Link href="/profile/[id]" as={`/profile/${user.id}`}>
            <a>{user.name}</a>
          </Link>
        </div>
      })}
    </div>
  )
}
