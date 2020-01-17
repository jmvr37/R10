import createStackNavigatior from "react-navigation";
import React from 'react';

import  NavigationLayout  from "./NavigationLayout";





// export default NavigationLayout;
export default createStackNavigatior(
    {
        layout: NavigationLayout,
    }
);

// export default {
//     createStackNavigatior,
//     NavigationLayout,
// }