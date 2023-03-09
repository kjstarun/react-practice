// import Input from "./React-State/input";
// import Textarea from "./React-Form/textarea";
// import Range from "./React-Form/range";
// import Dropdown from "./React-Form/dropdown";
// import Date from "./React-Form/date";
// import Check from "./React-Form/checkbox";
// import Radio from "./React-Form/radio";
// import Counter from "./Conditional-Rendering/counter";
// import Like from "./Like-functionality/like";
// import Closure from "./Batching/closure";
// import PropsCC from "./Props/propsCC";
// import PropsFC from "./Props/propsFC";
// import Parent from "./PassDatatoChild/parent";
// import Like from "./Like-functionality/like";
// import MoviesList from "./Movies-api/movielist";
// import Life from "./Lifecycle/lifecycle";
// import OnEnter from "./LocalStorage/onEnter";
// import MemoParent from "./Optimization/parentmemo";
// import DropDownItem from "./treeView/head";
import Tree from "./treeView/tree";
// import Parent from "./Onclick-description/parent";
// import UseEffectBlank from "./useEffect/useEffect-blank";
// import UseEffectWithDependencies from "./useEffect/useEffect-wdep";
// import One from "./Unmounting/one";
// import Day11CleanupFunc from "./Unmounting/unmount-with-depen";
// import Form from "./dynamic-form/form";
// import CallOne from "./example/callOne";
// import FilterV2 from "./Filter-usememo/filterV2";
// import Parent from "./dark-theme/parent";
// import LikeComp from "./Like-functionality/like";
// import A from "./prop-drilling-fix-context/A";
// import UseCallbackOne from "./useCallback/callBack1";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Child1 from "./dark-theme/child1";
// import { createContext, useState } from "react";
// import UseTransition1 from "./useTransition/use1";
// import UseTransitionFix from "./useTransition/use2fix";
// import UseID1 from "./useID/useIDone";
// import StyleOne from "./styled-comp/styleOne";
// import DoubleClick from "./ondoubleclick/doubleclick";
// import ItemList from "./item-list-comp/item-list";
// import Counter from "./redux-comp/counter";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import ItemList from "./item-list-comp/item-list";

// export const useContextAPI = createContext(null);
// const UseContext = useContextAPI.Provider;

function App() {
  // const [color, setColor] = useState(0);

  // const toggletheme = () => setColor((prev) => !prev);

  return (
    // <>
    //   <PropsFC subject="HTML" />
    //   <PropsCC subject="CSS" />
    //   <PropsFC subject="JS" />
    //   <PropsCC subject="React" />
    // </>
    // <UseContext value={{ color, toggletheme }}>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Parent />} />
    //       <Route path="child1" element={<Child1 />} />
    //     </Routes>
    //   </BrowserRouter>
    // </UseContext>
    // <Parent />
    // <Provider store={store}>
    //   <Counter />
    // </Provider>
    <Tree />
  );
}

export default App;
