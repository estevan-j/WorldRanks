const CountryRow = ({image, name, population, area, region}) => {
  return (
    <tr>
      <td>
        <img style={{width: '4.5rem', borderRadius:'9px'}} src={image} alt={NamedNodeMap} />
      </td>
      <td>{name}</td>
      <td>{population}</td>
      <td>{area}</td>
      <td>{region}</td>
    </tr>
  );
};

export default CountryRow;
