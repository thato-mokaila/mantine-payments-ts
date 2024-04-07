import { BarChart } from '@mantine/charts';
import {Box} from "@mantine/core";
import { data } from './data';
import classes from './PaymentsChart.module.css';

export default function PaymentsChart() {
    return (
        <Box className={classes.wrap}>
            <BarChart
                h={400}
                data={data}
                dataKey="month"
                withLegend={true}
                withTooltip={true}
                legendProps={{ verticalAlign: 'bottom', height: 50 }}
                series={[
                    { name: 'INST', color: 'violet.6' },
                    { name: 'BKTR', color: 'blue.6' },
                    { name: 'NURG', color: 'teal.6' },
                ]}
            />
        </Box>
    );
}