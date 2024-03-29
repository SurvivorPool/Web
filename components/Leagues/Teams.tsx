import {
  Box,
  Card,
  Flex,
  Table,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { FC, useMemo } from "react";

import Avatar from "../Common/Avatar";
import Link from "next/link";
import { Team } from "@/types";

interface TeamsProps {
  teams: Array<Team>;
}

const Teams: FC<TeamsProps> = ({ teams }) => {
  const theme = useMantineTheme();
  const rows = useMemo(() => {
    return teams.map((team) => (
      <tr
        key={team.id}
        style={{
          backgroundColor: !team.active ? theme.colors.red[1] : "transparent",
        }}
      >
        <td>
          <Link href={`/team/${team.id}`}>
            <Text
              sx={({ colors }) => ({
                color: colors.orange[5],

                "&:hover": {
                  color: colors.red[4],
                },
              })}
            >
              <b>{team.name}</b>
            </Text>
          </Link>
        </td>
        <td>
          <Flex align={"center"} gap="xs">
            <Avatar name={team.user.full_name} />
            <Text fz="sm">{team.user.full_name}</Text>
          </Flex>
        </td>
        <td>
          {team.active && !team?.current_pick && (
            <Text fz="small" color="dimmed">
              Unavailable
            </Text>
          )}
          {team.active && team?.current_pick && (
            <Text>{team.current_pick}</Text>
          )}
          {!team.active && <Text color="red">Eliminated</Text>}
        </td>
      </tr>
    ));
  }, [teams]);

  return (
    <Card>
      <Title order={3}>Other Registered Teams</Title>
      {!!teams?.length ? (
        <Table fontSize={"xs"}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Coach</th>
              <th>Current Pick</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      ) : (
        <Box
          sx={{
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text c="dimmed" size="lg">
            No one else has registered for this league yet.
          </Text>
        </Box>
      )}
    </Card>
  );
};

export default Teams;
