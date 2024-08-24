import { AppShell, Burger, Flex } from "@mantine/core";
import Navbar from "./Navbar";
import { useDisclosure } from "@mantine/hooks";
import Notifications from "./Notifications";

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      layout="alt"
      padding="md"
    >
      <AppShell.Header pl={320} pr={20}>
        <Flex align="center" h="100%" justify="space-between">
          <Burger opened={opened} onClick={toggle} size="sm" />
          <Notifications />
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar>
        <Navbar opened={opened} />
      </AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
};

export default Layout;
