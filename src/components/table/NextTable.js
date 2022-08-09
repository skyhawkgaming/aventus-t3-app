import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";

export default function App() {
  const columns = [
    { name: "Username", uid: "discordName" },
    { name: "Points&Splits", uid: "points" },
    { name: "Discord Id", uid: "discordId" },
  ];
  const users = [
    {
      id: 0,
      discordId: "223842459346665473",
      discordName: "[Admin] Oen",
      osrsName: "oenhuusen",
      points: "1050",
      splits: "309500000",
    },
    {
      id: 1,
      discordId: "366502634481254400",
      discordName: "[Recruiter] TearsOfWeezy",
      osrsName: "TearsOfWeezy",
      points: "450",
      splits: "0",
    },
    {
      id: 2,
      discordId: "374738974347886594",
      discordName: "[Recruiter] Tzidkiyahu",
      osrsName: "Tzidkiyahu",
      points: "4300",
      splits: "354500000",
    },
    {
      id: 3,
      discordId: "369807524506894338",
      discordName: "[T-Admin] Fritz",
      osrsName: "sir fritzy",
      points: "0",
      splits: "0",
    },
    {
      id: 4,
      discordId: "194524073273982977",
      discordName: "chauman0819",
      osrsName: "Chauman0819",
      points: "1100",
      splits: "182000000",
    },
  ];
  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "discordName":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ color: "$accents5" }}>
                {user.discordName}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ color: "$accents7" }}>
                {user.osrsName}
              </Text>
            </Row>
          </Col>
        );
      case "points":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ color: "$accents5" }}>
                {user.points}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ color: "$accents7" }}>
                {user.splits}
              </Text>
            </Row>
          </Col>
        );
      case "discordId":
        return <Row className="text-light-gray">{user.discordId}</Row>;
    }
  };
  return (
    <Table
      css={{
        height: "auto",
        minWidth: "100%",
        padding: "0",
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.uid} align={"start"}>
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={users}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
