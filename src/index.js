import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "@material-ui/core";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';
import Theme from "src/Theme/LightTheme.js";
import DarkTheme from "src/Theme/Theme.js";
import { WalletProvider } from "@react-dapp/wallet";
import { ModalProvider } from "./Providers/ModalProvider";
import { Provider } from "react-redux";
import store from "./State";

let item = localStorage.getItem("theme");
if (item === "light") item = true;
else item = false;

console.warn = () => { };

ReactDOM.render(
	<React.StrictMode>
		<WalletProvider
			config={{
				chainId: 42,
				supportedChainIds: [42],
				wrappedNative: {
					address: "",
					symbol: "WBNB",
				},
				usd: {
					address: "",
					symbol: "BUSD",
				},
				nativeUsdLp: {
					address: "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",
					symbol: "",
				},
			}}
		>
			<BrowserRouter>
				<ThemeProvider theme={item ? Theme : DarkTheme}>
					<Provider store={store}>
						<ModalProvider>
							<App />
						</ModalProvider>
					</Provider>
				</ThemeProvider>
			</BrowserRouter>
		</WalletProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
