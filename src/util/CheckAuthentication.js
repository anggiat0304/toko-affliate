const isAuthentication = ({isAuthentication,navigate})=>{
    console.log(isAuthentication);
    return(!isAuthentication  || isAuthentication == null ? navigate('/') : null)
}
export default isAuthentication;