import {
  Avatar,
  Box,
  Card,
  MediaQuery,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { FC, useMemo } from "react";

import Link from "next/link";
import { Team } from "@/types";

interface TeamsProps {
  teams: Array<Team>;
}

const Teams: FC<TeamsProps> = ({ teams }) => {
  const rows = useMemo(() => {
    return teams.map((team) => (
      <tr key={team.id}>
        <td>
          <Link href={`/team/${team.id}`}>View Team</Link>
        </td>
        <td>
          <b>{team.name}</b>
        </td>
        <td>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Avatar radius="xl" src={team.user.picture_url} />
            <Text fz="sm">{team.user.full_name}</Text>
          </Box>
        </td>
        <MediaQuery
          smallerThan={"sm"}
          styles={{
            display: "none",
          }}
        >
          <td>{team.current_pick}</td>
        </MediaQuery>
      </tr>
    ));
  }, [teams]);

  return (
    <Card>
      <Title order={3}>Registered Teams</Title>
      <Table fontSize={"xs"}>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Coach</th>
            <MediaQuery
              smallerThan={"sm"}
              styles={{
                display: "none",
              }}
            >
              <th>Current Pick</th>
            </MediaQuery>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Card>
  );
};

export default Teams;
