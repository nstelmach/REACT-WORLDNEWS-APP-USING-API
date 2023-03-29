import List from "./List";
import Grid from "./Grid";
import { useAppSelector } from "../hooks";

function MainContent() {
  const articlesView = useAppSelector((state) => state.articlesView.isGridView);

  return <>{articlesView ? <Grid /> : <List />}</>;
}

export default MainContent;
