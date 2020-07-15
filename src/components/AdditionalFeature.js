import React from 'react';
import { addFeature } from '../actions/featureActions'
import { reducer } from '../reducers/featureReducer'


const AdditionalFeature = props => {
  console.log('addfeature',addFeature(props.feature))
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button"
        onClick={() => {props.addFeature(props.feature)}}
      >Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   return {
//     ...state,
//     car: {
//       features: [...state, state.car.features  
//       ]
//     },
//     additionalFeatures: [
//       ...state, state.additionalFeatures
//     ]
    
//   }
// }

export default AdditionalFeature;
