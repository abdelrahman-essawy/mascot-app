import Image from 'next/image';
import EGPSVG from './EGPSVG';

const currencies = [
    {
        name: 'EGP',
        icon: '/EGP.png',
        url: 'https://api.exchangerate.host/latest?base=USD&symbols=EGP',
        value: 0,
        code:'EGP'
    },
    {
        name: 'Gold',
        icon: '/Gold.png',
        url: 'https://api.metalpr{iceapi.com/v1/latest?api_key=0f898c804fc9668965af4a8d8247f8d7&base=XAU&currencies=EGP',
        value: 0,
        code:'EGP'

    },
    {
        name: 'BTC',
        icon: '/BTC.png',
        url: 'https://api.exchangerate.host/latest?base=BTC&symbols=EGP',
        value: 0,
        code:'EGP'
    }
]

async function getData(url) {
    const response = await fetch(url, { next: { revalidate: 10 } });
    var data = await response.json();
    return data.rates
}

async function HeroPreviewTop3() {
    function start() {
                currencies.map(async({ name, value, url, code }) => (
            value = await getData(url),
            console.log(value.EGP, name),<HeroPreviewTop3/>
        ))
    }
start()

    return (

        <section className='px-3 py-4'>
        
            <div className='flex justify-evenly items-center text-center space-x-3'>

                {
                    currencies.map(({ name, icon, url, value }, index) => (
                        <div key={index}>
                            <Image src={icon} width={200} height={200} />
                            <h1>{name}</h1>
                            <p>{value.EGP||0}</p>
                        </div>
                    ))
                }
            </div>
        </section>

    )
}

export default HeroPreviewTop3