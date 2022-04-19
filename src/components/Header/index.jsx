import Logo from "../img/logo.png";
import { Button } from "../Button/Button";
import "./styles.css";

export const Header = ({ inputProduct, setInputProduct, showProducts }) => {
  return (
    <div className="headerContent">
      <div className="logo">
        <img src={Logo} />
      </div>
      <div className="searchBar">
        <input
          placeholder="Digitar Pesquisa"
          value={inputProduct}
          onChange={(event) => setInputProduct(event.target.value)}
        ></input>
        <Button
          className="defaultButton"
          title="Pesquisar"
          func={() => showProducts(inputProduct)}
        />
      </div>
    </div>
  );
};
