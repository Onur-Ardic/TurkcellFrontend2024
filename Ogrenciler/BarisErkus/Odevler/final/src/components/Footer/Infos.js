import { List, ListItem, StyledLink } from "./styles";

const Infos = ({ title, list }) => {
  return (
    <div className="col-lg-2 col-sm-6 mb-4 mb-lg-0">
      <h5 className="text-uppercase mb-4">{title}</h5>
      <List>
        {list.map((item, index) => (
          <ListItem key={index}>
            <StyledLink href="#">{item}</StyledLink>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Infos;
