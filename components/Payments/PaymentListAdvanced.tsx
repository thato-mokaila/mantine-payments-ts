'use client'
import {useMemo} from 'react';
import {MantineReactTable, type MRT_ColumnDef, useMantineReactTable,} from 'mantine-react-table';
import {Box, Button, Container} from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
import {data} from "@/components/Payments/data";

export type Employee = {
    firstName: string;
    lastName: string;
    email: string;
    jobTitle: string;
    salary: number;
    startDate: string;
    signatureCatchPhrase: string;
    avatar: string;
};

const PaymentListAdvanced = () => {
    const columns = useMemo<MRT_ColumnDef<Employee>[]>(
        () => [
            {
                id: 'employee', //id used to define `group` column
                header: 'Employee',
                columns: [
                    {
                        accessorFn: (row) => `${row.firstName} ${row.lastName}`, //accessorFn used to join multiple data into a single cell
                        id: 'name', //id is still required when using accessorFn instead of accessorKey
                        header: 'Name',
                        size: 250,
                        filterVariant: 'autocomplete',
                        Cell: ({ renderedCellValue, row }) => (
                            <Box
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                }}
                            >
                                <img
                                    alt="avatar"
                                    height={30}
                                    src={row.original.avatar}
                                    style={{ borderRadius: '50%' }}
                                />
                                <span>{renderedCellValue}</span>
                            </Box>
                        ),
                    },
                    {
                        accessorKey: 'email', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                        enableClickToCopy: true,
                        header: 'Email',
                        size: 300,
                    },
                ],
            },
            {
                id: 'id',
                header: 'Job Info',
                columns: [
                    {
                        accessorKey: 'salary',
                        header: 'Salary',
                        size: 200,
                        filterVariant: 'range-slider',
                        mantineFilterRangeSliderProps: {
                            color: 'indigo',
                            label: (value) =>
                                value?.toLocaleString?.('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                }),
                        },
                        //custom conditional format and styling
                        Cell: ({ cell }) => (
                            <Box
                                style={(theme) => ({
                                    backgroundColor:
                                        cell.getValue<number>() < 50_000
                                            ? theme.colors.red[9]
                                            : cell.getValue<number>() >= 50_000 &&
                                            cell.getValue<number>() < 75_000
                                                ? theme.colors.yellow[9]
                                                : theme.colors.green[9],
                                    borderRadius: '4px',
                                    color: '#fff',
                                    maxWidth: '9ch',
                                    padding: '4px',
                                })}
                            >
                                {cell.getValue<number>()?.toLocaleString?.('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                })}
                            </Box>
                        ),
                    },
                    {
                        accessorKey: 'jobTitle', //hey a simple column for once
                        header: 'Job Title',
                        filterVariant: 'multi-select',
                        size: 350,
                    },
                    {
                        accessorFn: (row) => {
                            //convert to Date for sorting and filtering
                            const sDay = new Date(row.startDate);
                            sDay.setHours(0, 0, 0, 0); // remove time from date (useful if filter by equals exact date)
                            return sDay;
                        },
                        id: 'startDate',
                        header: 'Start Date',
                        filterVariant: 'date-range',
                        sortingFn: 'datetime',
                        enableColumnFilterModes: false, //keep this as only date-range filter with between inclusive filterFn
                        Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(), //render Date as a string
                        Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
                    },
                ],
            },
        ],
        [],
    );

    const table = useMantineReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this shared, etc.)
        enableColumnFilterModes: false,
        enableColumnOrdering: false,
        enableFacetedValues: false,
        enableColumnPinning: true,
        enableRowActions: true,
        enableRowSelection: true,
        initialState: {
            showColumnFilters: false,
            showGlobalFilter: true,
        },
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        mantinePaginationProps: {
            radius: 'sm',
            size: 'lg',
        },
        positionActionsColumn: 'last',
        mantineSearchTextInputProps: {
            placeholder: 'Search Payments',
        },
        renderRowActions: ({ row }) => <Button color="oklch-blue" variant="light" onClick={() => {

        }}
        >
            View
        </Button>
    });

    return <Container size="2xl" py="xl" mx="xl">
            <MantineReactTable table={table} />
        </Container>
    ;
};

export default PaymentListAdvanced;