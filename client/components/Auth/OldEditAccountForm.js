// import React from 'react';
// import { connect } from 'react-redux';
// // import PropTypes from 'prop-types';
// import { auth, notGoogleRegister } from '../../reducers/store';
// import { Icon, Button, Input, List, Container } from 'semantic-ui-react';
// import SocialButton from '../UI/SocialButton';
// // import Signup from '../auth-form'

// /**
//  * COMPONENT
//  */
// const EditForm = props => {
//   const { name, displayName, handleSubmit, error } = props;

//   return (

//         <form onSubmit={handleSubmit} name={name}>
//           <Input name="firstName" type="text" placeholder="First Name" fluid />
//           <Input name="lastName" type="text" placeholder="Lase Name" fluid />
//           <Input name="email" type="text" placeholder="Email" fluid />
//           <Input name="imageUrl" type="text" placeholder="Profile Pic Image Url" fluid />
//           <Input name="address" type="text" placeholder="Address" fluid />
//           <Input name="city" type="text" placeholder="City" fluid />
//           <Input name="state" type="text" placeholder="State" fluid />
//           <Input name="zipCode" type="text" placeholder="Zip Code" fluid />
//           <Input name="phone" type="text" placeholder="Phone" fluid />
//           <Input name="password" type="password" placeholder="Password" fluid />

//           <div>
//             <Button type="submit">{displayName}</Button>
//           </div>
//           {error && error.response && <div> {error.response.data} </div>}
//         </form>

//     //   <div>{/* <Signup /> */}</div>
//     //   <SocialButton
//     //     href="/auth/google"
//     //     displayName={displayName}
//     //     className="google plus"
//     //     name="Google"
//     //   />
//     // </div>
//   );
// };

// const mapSignup = state => {
//   return {
//     name: 'signup',
//     displayName: 'Sign Up',
//     error: state.user.error
//   };
// };

// const mapDispatch = dispatch => {
//   return {
//     handleSubmit(evt) {
//       evt.preventDefault();
//       const formName = evt.target.name;
//       const password = evt.target.password.value;
//       const firstName = evt.target.firstName.value;
//       const lastName = evt.target.lastName.value;
//       const imageUrl = evt.target.imageUrl.value;
//       const address = evt.target.address.value;
//       const city = evt.target.city.value;
//       const state = evt.target.state.value;
//       const zipCode = evt.target.zipCode.value;
//       const phone = evt.target.phone.value;
//       const email = evt.target.email.value;
//       dispatch(
//         notGoogleRegister(
//           {
//             email,
//             password,
//             firstName,
//             lastName,
//             imageUrl,
//             address,
//             city,
//             state,
//             zipCode,
//             phone
//           },
//           formName
//         )
//       );
//     }
//   };
// };

// export const EditAccountForm = connect(
//   mapSignup,
//   mapDispatch
// )(EditForm);
