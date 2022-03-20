import { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
import { updateTeamSearch } from "../redux/Team/team.actions";
import "./Search.css";

import { Form, InputGroup } from "rsuite";

function Search({ navTab }) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTeamSearch(search));
  });
  function handleSearch() {}
  return (
    <Form inline onSubmit={() => handleSearch()} className="inline-form">
      <i class="fa fa-search"></i>
      <Form.Control
        type="text"
        placeholder={`Search ${navTab.toLowerCase().slice(0, -1)} name ...`}
        className="mr-sm-2"
        onChange={(val) => setSearch(val)}
      />
    </Form>
  );
}
const mapStateToProps = (state) => ({
  navTab: state.teams.navTab,
});
export default connect(mapStateToProps)(Search);
