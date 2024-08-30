// ** JWT import
import jwt from 'jsonwebtoken'

// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Default AuthConfig
import defaultAuthConfig from 'src/configs/auth'

// ** Types
import { UserDataType } from 'src/context/types'

const users: UserDataType[] = [
  {
    id: 1,
    role: 'SuperAdmin',
    password: 'superadmin',
    fullName: 'John Doe',
    username: 'johndoe',
    email: 'superadmin@vuexy.com',
    profilePicture: '/images/avatars/1.png'
  },
  {
    id: 2,
    role: 'admin',
    password: 'admin',
    fullName: 'Joson Abbot',
    username: 'JosonAbbot',
    email: 'admin@vuexy.com',
    profilePicture: '/images/avatars/3.png'
  },
  {
    id: 3,
    role: 'Doctor',
    password: 'doctor',
    fullName: 'Sonia Bush',
    username: 'SoniaBush',
    email: 'doctor@vuexy.com',
    profilePicture: '/images/avatars/4.png'
  },
  {
    id: 4,
    role: 'Pharmacist',
    password: 'Pharmacist',
    fullName: 'Harry Grant',
    username: 'HarryGrant',
    email: 'Pharmacist@vuexy.com',
    profilePicture: '/images/avatars/5.png'
  },
  {
    id: 5,
    role: 'Pathologist',
    password: 'pathologist',
    fullName: 'Belina Turner',
    username: 'BelinaTurner',
    email: 'pathologist@vuexy.com',
    profilePicture: '/images/avatars/6.png'
  },
  {
    id: 6,
    role: 'Radiologist',
    password: 'radiologist',
    fullName: 'John Hook',
    username: 'JohnHook',
    email: 'radiologist@vuexy.com',
    profilePicture: '/images/avatars/7.png'
  },
  {
    id: 7,
    role: 'Accountant',
    password: 'accountant',
    fullName: 'Brad Frost',
    username: 'BradFrost',
    email: 'accountant@vuexy.com',
    profilePicture: '/images/avatars/9.png'
  },
  {
    id: 8,
    role: 'Receptionist',
    password: 'receptionist',
    fullName: 'Maria Ford',
    username: 'MariaFord',
    email: 'receptionist@vuexy.com',
    profilePicture: '/images/avatars/12.png'
  },
  {
    id: 9,
    role: 'Nurse',
    password: 'nurse',
    fullName: 'April Clinton',
    username: 'AprilClinton',
    email: 'nurse@vuexy.com',
    profilePicture: '/images/avatars/10.png'
  }
]

// ! These two secrets should be in .env file and not in any other file
const jwtConfig = {
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  expirationTime: process.env.NEXT_PUBLIC_JWT_EXPIRATION,
  refreshTokenSecret: process.env.NEXT_PUBLIC_JWT_REFRESH_TOKEN_SECRET
}

type ResponseType = [number, { [key: string]: any }]

mock.onPost('/jwt/login').reply(request => {
  const { email, password } = JSON.parse(request.data)

  let error = {
    email: ['Something went wrong']
  }

  const user = users.find(u => u.email === email && u.password === password)

  if (user) {
    const accessToken = jwt.sign({ id: user.id }, jwtConfig.secret as string, { expiresIn: jwtConfig.expirationTime })

    const response = {
      accessToken,
      userData: { ...user, password: undefined }
    }

    return [200, response]
  } else {
    error = {
      email: ['email or Password is Invalid']
    }

    return [400, { error }]
  }
})

mock.onPost('/jwt/register').reply(request => {
  if (request.data.length > 0) {
    const { email, password, username } = JSON.parse(request.data)
    const isEmailAlreadyInUse = users.find(user => user.email === email)
    const isUsernameAlreadyInUse = users.find(user => user.username === username)
    const error = {
      email: isEmailAlreadyInUse ? 'This email is already in use.' : null,
      username: isUsernameAlreadyInUse ? 'This username is already in use.' : null
    }

    if (!error.username && !error.email) {
      const { length } = users
      let lastIndex = 0
      if (length) {
        lastIndex = users[length - 1].id
      }
      const userData = {
        id: lastIndex + 1,
        email,
        password,
        username,
        profilePicture: null,
        avatar: null,
        fullName: '',
        role: 'admin'
      }

      users.push(userData)

      const accessToken = jwt.sign({ id: userData.id }, jwtConfig.secret as string)

      const user = { ...userData }
      delete user.password

      const response = { accessToken }

      return [200, response]
    }

    return [200, { error }]
  } else {
    return [401, { error: 'Invalid Data' }]
  }
})

mock.onGet('/auth/me').reply(config => {
  // ** Get token from header
  // @ts-ignore
  const token = config.headers.Authorization as string

  // ** Default response
  let response: ResponseType = [200, {}]

  // ** Checks if the token is valid or expired
  jwt.verify(token, jwtConfig.secret as string, (err, decoded) => {
    // ** If token is expired
    if (err) {
      // ** If onTokenExpiration === 'logout' then send 401 error
      if (defaultAuthConfig.onTokenExpiration === 'logout') {
        // ** 401 response will logout user from AuthContext file
        response = [401, { error: { error: 'Invalid User' } }]
      } else {
        // ** If onTokenExpiration === 'refreshToken' then generate the new token
        const oldTokenDecoded = jwt.decode(token, { complete: true })

        // ** Get user id from old token
        // @ts-ignore
        const { id: userId } = oldTokenDecoded.payload

        // ** Get user that matches id in token
        const user = users.find(u => u.id === userId)

        // ** Sign a new token
        const accessToken = jwt.sign({ id: userId }, jwtConfig.secret as string, {
          expiresIn: jwtConfig.expirationTime
        })

        // ** Set new token in localStorage
        window.localStorage.setItem(defaultAuthConfig.storageTokenKeyName, accessToken)

        const obj = { userData: { ...user, password: undefined } }

        // ** return 200 with user data
        response = [200, obj]
      }
    } else {
      // ** If token is valid do nothing
      // @ts-ignore
      const userId = decoded.id

      // ** Get user that matches id in token
      const userData = JSON.parse(JSON.stringify(users.find((u: UserDataType) => u.id === userId)))

      delete userData.password

      // ** return 200 with user data
      response = [200, { userData }]
    }
  })

  return response
})
