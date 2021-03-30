import PropTypes from 'prop-types';
const profile =(props) => {
    return (
        <div>
           <div>{props.handleName()}</div> 
        <h1>My name is {props.fullName}</h1>
        <h1>Bio: {props.bio}</h1>
        <h1>My profession is {props.profession}</h1>
        <h1>{props.children}</h1>
    </div>
) 
 };
 profile.defaultProps = {
    fullName:"Faten",
    bio:"Faten",
    profession:"Instructrice",
    children:"put your photo!"
 }
 
 profile.propTypes ={
     fullName: PropTypes.string,
     bio: PropTypes.string,
     profession: PropTypes.string,
     handleName:PropTypes.func,
 }
 export default profile