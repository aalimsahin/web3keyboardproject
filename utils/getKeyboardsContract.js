
import { ethers } from "ethers";
import abi from "../utils/Keyboards.json"

const contractAddress = '0xDf2A342789B00b7dA76618655aa74Fc06D1Fa80C';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
