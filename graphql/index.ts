export const getUserQuery = `
    query GetUser($email: String!) {
        user(by: { email: $email }){
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedInUrl
        }
    }
`
export const createUSerMutation = `
    mutation CreateUser($input: UserCreate!) {
        userCreate(input: $input) {
            user {
                name
                email
                avatarUrl
                description
                githubUrl
                linkedInUrl
                id
            }
        }
    }
`