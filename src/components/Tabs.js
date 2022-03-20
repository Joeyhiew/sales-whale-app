import "./Tabs.css";
import { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
import { changeTabs } from "../redux/Team/team.actions";
import Search from "./Search";

function TabPanel() {
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    dispatch(changeTabs(activeTab));
  });
  const dispatch = useDispatch();
  return (
    <div className="topnavbar">
      <div class="topnav">
        <a
          href="#all"
          id={"All"}
          class={activeTab == "All" ? "active" : null}
          onClick={(e) => setActiveTab(e.target.id)}
        >
          All
        </a>
        <a
          href="#favorites"
          id={"Favorites"}
          class={activeTab == "Favorites" ? "active" : null}
          onClick={(e) => setActiveTab(e.target.id)}
        >
          Favorites
        </a>
        <a
          href="#archived"
          id={"Archived"}
          class={activeTab == "Archived" ? "active" : null}
          onClick={(e) => setActiveTab(e.target.id)}
        >
          Archived
        </a>
      </div>
      <div className="search-comp">
        <Search />
      </div>
    </div>
  );
}
export default TabPanel;
