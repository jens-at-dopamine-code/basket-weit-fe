import { ModuleRoute } from '@/enumerations';

import { NavigationItem } from './NavigationItem';

export const Navigation = () => (
  <div className="w-screen">
    <ul>
      <li>
        <NavigationItem uri={ModuleRoute.HOME} />
      </li>
    </ul>
  </div>
);
