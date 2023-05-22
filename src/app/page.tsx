"use client"
import { Provider } from "react-redux";
import MenuDesk from "./components/MenuDesk"
import MainContent from "./components/MainContent"
import store from "./redux/store";

export default function Home() {
  return (
    <main>
      <Provider store={store}>
        <MenuDesk />
        <MainContent />
      </Provider>
    </main>
  )
}
