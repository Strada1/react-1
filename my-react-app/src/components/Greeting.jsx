export default function getGreeting(user) {
    if(user) {
        return <h1>Здравствуй, {formatName(user)}!</h1>
    }
    return <h1>Здравствуй, незнакомец!</h1>
}

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
