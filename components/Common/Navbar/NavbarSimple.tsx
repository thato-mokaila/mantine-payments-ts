'use client'
import {Anchor, Breadcrumbs, Code, Group} from '@mantine/core';
import {
    IconCreditCardPay,
    IconDeviceMobileCheck,
    IconLayoutDashboard,
    IconLogout,
    IconReceipt2,
    IconSwitchHorizontal,
} from '@tabler/icons-react';
import {MantineLogo} from '@mantinex/mantine-logo';
import Link from "next/link";
import {usePathname} from "next/navigation";
import classes from './NavbarSimple.module.css';

const data = [
    { link: '/dashboard', label: 'Dashboard', icon: IconLayoutDashboard },
    { link: '/payments', label: 'Payments', icon: IconCreditCardPay },
    { link: '/reservations', label: 'Reservations', icon: IconReceipt2 },
    { link: '/jobs', label: 'Jobs', icon: IconDeviceMobileCheck },
];

const items = [
    { title: 'Mantine', href: '/' },
    { title: 'Mantine hooks', href: '#' },
].map((item, index) => (
    <Anchor href={item.href} key={index}>
        {item.title}
    </Anchor>
));

export function NavbarSimple() {
    const pathname = usePathname();
    const links = data.map((item) => (
        <Link
            className={classes.link}
            data-active={(pathname === item.link) || undefined}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                // event.preventDefault();
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </Link>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Group className={classes.header} justify="space-between">
                    <Breadcrumbs>{items}</Breadcrumbs>
                    {/*<Breadcrumbs separator="→" separatorMargin="md" mt="xs">*/}
                    {/*    {items}*/}
                    {/*</Breadcrumbs>*/}
                </Group>
                {links}
            </div>

            <div className={classes.footer}>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
                    <span>Change account</span>
                </a>

                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </a>
            </div>
        </nav>
    );
}