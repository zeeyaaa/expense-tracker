import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Money } from "./components/Money";
import { Transactionlist } from "./components/Transactionlist";
import { Addtransaction } from "./components/Addtransaction";
import { GlobalProvider } from "./context/GlobalState";

function App(){
  return (
    <GlobalProvider>
     <Header/>
     <div className="container">
      <Balance />
      <Money/>
      <Transactionlist/>
      <Addtransaction/>

     </div>
    </GlobalProvider>
  );
}

export default App;