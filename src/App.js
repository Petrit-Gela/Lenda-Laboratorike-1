import logo from './logo.svg';
import './App.css';
import "./index.css";



import {Doctors} from "./Doctors";
import { Login } from './Login';
import { Diagnose } from './Diagnose';
import { Faktura } from './Faktura';
import { Diets } from './Diets';
import {Orari} from "./Orari";
import { Register } from './Register';
import { Registernurse } from './Registernurse';
import { Registerdoctor } from './Registerdoctor';
import { Nurse } from './Nurse';
import { WhereToRegister } from './WhereToRegister';
import { Medication } from './Medication';
import { Department } from './Department';
import { OrariNur } from './OrariNur';
import { Room } from './Room';
import { Ambullanca } from './Ambullanca';
import { DietFood } from './DietFood';
import { Home } from './Home';
import { Appointments } from './Appointments';
import { Laboratori } from './Laboratori';
import { Patients } from './Patients';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/doctors" exact component={Doctors} />
        <Route path="/login" exact component={Login} />
        <Route path="/diets" exact component={Diets} />
        <Route path="/diagnose" exact component={Diagnose} />
        <Route path="/lab" exact component={Laboratori} />
        <Route path="/DietFood" exact component={DietFood} />
        <Route path="/OrariNur" exact component={OrariNur} />
        <Route path="/faktura" exact component={Faktura} />
        <Route path="/registerdoctor" exact component={Registerdoctor} />
        <Route path="/orari" exact component={Orari}/>
        <Route path="/room" exact component={Room}/>
        <Route path="/nurse" exact component={Nurse} />
        <Route path="/register" exact component={Register} />
        <Route path="/registernurse" exact component={Registernurse} />
        <Route path="/medication" exact component={Medication} />
        <Route path="/patients" exact component={Patients} />
        <Route path="/WhereToRegister" exact component={WhereToRegister} />
        <Route path="/department" exact component={Department} />
        <Route path="/ambullanca" exact component={Ambullanca} />
        <Route path='/' exact component={Home} />
        <Route path="/doctors" exact component={Doctors} />
        <Route path="/appointments" exact component={Appointments} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;