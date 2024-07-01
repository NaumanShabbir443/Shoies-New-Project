import MatchStyle from "../Home/MatchStyle";
import FullDetails from "./FullDetails";
import Pills from "./Pills";
import SimilarItems from "./SimilarItems";

export default function index() {
    return (
        <>
            <FullDetails />
            <Pills />
            <SimilarItems />
            <MatchStyle />
        </>
    )
}
