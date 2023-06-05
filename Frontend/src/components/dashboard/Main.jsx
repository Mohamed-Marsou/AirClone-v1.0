import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    BarElement,ArcElement
} from 'chart.js'

import { Line,Doughnut } from "react-chartjs-2"
import "../../style/dashboard.css"
import { TbHomePlus } from 'react-icons/tb';
import { TbArrowBounce } from 'react-icons/tb';
import { FiUserCheck } from 'react-icons/fi';
import { BsGraphUpArrow } from 'react-icons/bs';
import { GiCash } from 'react-icons/gi';



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    BarElement,
    ArcElement
)
const Main = () => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Listings',
                data: [2000, 4200, 1800, 2800, 4300, 6500, 7700,6888,4000,2555,999,1200], // Hard-coded data
                borderColor: '#FE5B5F',
                backgroundColor: '#fe5b5e52',
            },
        ],
    };

    // data 2 
     const data2 = {
        labels: ['USA', 'UK', 'MAR', 'ESP', 'GER', 'Other'],
        datasets: [
          {
            label: '$ of ',
            data: [30, 33, 15, 15, 4, 2],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <div className="mainView">
            <div className="gene_info_container">
                <div className="i-w">
                    <div className="top">
                        +855
                        <TbHomePlus />
                    </div>
                    <div className="bottom">
                        <p>New Listings</p>
                        <TbArrowBounce />
                    </div>
                </div>
                <div className="i-w">
                    <div className="top">
                        +77
                        <FiUserCheck />
                    </div>
                    <div className="bottom">
                        <p>New Hosters</p>
                        <TbArrowBounce />
                    </div>
                </div>
                <div className="i-w">
                    <div className="top">
                        $53242
                        <BsGraphUpArrow />
                    </div>
                    <div className="bottom">
                        <p>Hoster Earnings</p>
                        <TbArrowBounce />
                    </div>
                </div>
                <div className="i-w">
                    <div className="top">
                        $88855
                        <GiCash />
                    </div>
                    <div className="bottom">
                        <p>AirClone Earnings</p>
                        <TbArrowBounce />
                    </div>
                </div>
            </div>
            <div className="chartsContainer">
                <div className="chr-1">
                    <h1>Yearly Listings 2022</h1>
                    <Line options={options} data={data} />
                </div>
                <div className="chr-2">
                    <h1>Hosters Origin</h1>
                    <Doughnut id="ch2" data={data2} />
                </div>
            </div>
        </div>
    )
}


export default Main;
