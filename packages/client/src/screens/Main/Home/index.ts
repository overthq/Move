import { FluidNavigator } from 'react-navigation-fluid-transitions';

import Tickets from './Tickets';
import Ticket from './Ticket';

const Home = FluidNavigator({ Tickets, Ticket });

export default Home;
