import React, { useEffect, useState } from "react";

import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionsContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionProvider = ({children})=>{

    const [currentAccount, setCurrentAccount] = useState("")

    const checkIfWalletIsConnected = async () =>{

        try {
            if (!ethereum) return alert('Please install Metamask');
            const accounts = await ethereum.request({method: 'eth_accounts'});
    
            if(accounts.length){
                setCurrentAccount(accounts[0]);
    
                //getAllTransactions();
            }else{
                console.log('No Account Found');
            }
            
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum Object.")   

        }
        
    }

    const connectWallet = async()=>{
        try {
            if (!ethereum) return alert('Please install Metamask');
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0])
        } catch (error) {
         throw new Error("No ethereum Object.")   
        }
    }

    useEffect(()=>{
        checkIfWalletIsConnected()
    },[]);

    return(
        <TransactionsContext.Provider value={{connectWallet, currentAccount}}>
            {children}
        </TransactionsContext.Provider>
    )
}