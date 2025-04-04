// import { Platform } from 'react-native';

// const lowImpactApps = ['app1', 'app2']; // Replace with actual app identifiers
// const mediumImpactApps = ['app3', 'app4'];
// const highImpactApps = ['app5', 'app6'];

// interface UserApps {
//   low: string[];
//   medium: string[];
//   high: string[];
// }

// export async function checkUserApps(): Promise<UserApps> {
//   let userApps: UserApps = {
//     low: [],
//     medium: [],
//     high: []
//   };

//   // Example logic to check for installed apps
//   // This is a placeholder and should be replaced with actual logic to check installed apps
//   if (Platform.OS === 'ios') {
//     console.log('ios');
//   } else if (Platform.OS === 'android') {
//     console.log('android');
//   }

//   // Simulate checking for apps
//   userApps.low = lowImpactApps.filter(app => Math.random() > 0.5);
//   userApps.medium = mediumImpactApps.filter(app => Math.random() > 0.5);
//   userApps.high = highImpactApps.filter(app => Math.random() > 0.5);

//   return "Hello";
// }

// export default checkUserApps;

import { Platform } from 'react-native';

export function checkUserApps(): string {
  if (Platform.OS === 'android') {
    return "hi";
  } else if (Platform.OS === 'ios') {
    return "no";
  }

  return "unknown platform";
}

export default checkUserApps;