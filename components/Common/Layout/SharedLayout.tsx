'use client'
import {
    ActionIcon,
    AppShell,
    Box,
    Burger,
    Button,
    Center,
    Drawer,
    Flex,
    Grid,
    Group,
    Menu, Radio,
    SimpleGrid, Space, Divider, Input, Text, MultiSelect
} from "@mantine/core";
import React, {useState} from "react";
import {useDisclosure} from "@mantine/hooks";
import {useRouter, usePathname} from 'next/navigation';
import {IconAdjustments} from "@tabler/icons-react";
import {NavbarSimple} from "@/components/Common/Navbar/NavbarSimple";
import {DatePicker} from "@mantine/dates";

export default function SharedLayout ({
                                     children,
                                 }: Readonly<{
    children: React.ReactNode;
}>) {
    const [filtersOpened, {toggle: toggleFilters}] = useDisclosure(false);
    const [paymentOpened, {toggle: togglePayment}] = useDisclosure(false);
    const [mobileOpened, {toggle: toggleMobile}] = useDisclosure();
    const [desktopOpened, {toggle: toggleDesktop}] = useDisclosure(true);
    const router = useRouter();
    const pathname = usePathname();

    const [searchByFilter, setSearchByFilterValue] = useState('reference');
    const [dateFilter, setDateFilterValue] = useState<[Date | null, Date | null]>([null, null]);

    return (
        <AppShell
            header={{height: 60}}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: {mobile: !mobileOpened, desktop: !desktopOpened},
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md" py="sm">

                    <Grid w="100%">
                        <Grid.Col span={3}>
                            <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm"/>
                            <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm"/>
                        </Grid.Col>
                        <Grid.Col span={6}/>
                        <Grid.Col span={3}>

                            <Flex
                                gap="md"
                                justify="flex-start"
                                align="center"
                                direction="row-reverse"
                                wrap="wrap"
                            >

                                <Button color="oklch-blue" variant="light" onClick={() => router.push('/', { scroll: false })}>Logout</Button>
                                {pathname === '/payments' &&
                                    <ActionIcon variant="outline" aria-label="Settings" onClick={toggleFilters}>
                                        <IconAdjustments style={{ width: '80%', height: '80%' }} stroke={1.5} />
                                    </ActionIcon>
                                }

                            </Flex>

                        </Grid.Col>
                    </Grid>

                </Group>
            </AppShell.Header>
            <AppShell.Navbar>
                <NavbarSimple />
            </AppShell.Navbar>
            <AppShell.Main>
                <Drawer opened={filtersOpened} onClose={toggleFilters} withCloseButton={false}>

                    <Space h="md" />
                        <Box><Text size="xl" fw={700} tt="capitalize">Payment filters</Text></Box>
                    <Space h="md" />

                    <Divider my="xs" labelPosition="center" />
                    <Space h="md" />

                    <SimpleGrid cols={1}>
                        <Radio.Group
                            value={searchByFilter}
                            onChange={setSearchByFilterValue}
                            name="searchBy"
                            label="Select option and enter payment reference or uetr"
                            withAsterisk
                        >
                            <Space h="sm" />
                            <Group mt="xs">
                                <Radio value="reference" label="Payment Reference" color="cyan"
                                       variant="outline" size="md"/>
                                <Radio value="uetr" label="Uetr" color="cyan"
                                       variant="outline" size="md"/>
                            </Group>
                        </Radio.Group>

                        <Input size="md" radius="xl" placeholder="Input component" />

                        <Divider my="xs" label="OR" labelPosition="center" />

                        <Box><Text fw={500} tt="capitalize">Created Date</Text></Box>

                        <Center>
                            <DatePicker type="range" value={dateFilter} allowSingleDateInRange onChange={setDateFilterValue} size="md" />
                        </Center>

                        <Divider my="xs" labelPosition="center" />

                        <Box><Text fw={500} tt="capitalize">Payment status</Text></Box>

                        <MultiSelect
                            hidePickedOptions
                            placeholder="Select payment type"
                            data={['Created', 'Successful', 'Failed', 'Rejected']}
                        />

                        <Divider my="xs" labelPosition="center" />

                        <Box><Text fw={500} tt="capitalize">Payment types</Text></Box>

                        <MultiSelect
                            hidePickedOptions
                            placeholder="Select payment rail"
                            data={['INST', 'BKTR', 'NURG', 'URGP', 'URNS']}
                        />

                        <Divider my="xs" labelPosition="center" />

                        <Group visibleFrom="sm">
                            <Button color="cyan" variant="outline" onClick={() => {}}>Clear</Button>
                            <Button color="cyan" onClick={() => {
                                toggleFilters()
                            }}>Search</Button>
                        </Group>

                    </SimpleGrid>
                </Drawer>
                <Drawer size="xl" opened={paymentOpened} onClose={togglePayment} withCloseButton={false}>
                    Drawer without header, press escape or click on overlay to close
                </Drawer>
                {children}
            </AppShell.Main>
        </AppShell>
    )
};