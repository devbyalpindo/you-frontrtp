import Head from "next/head";
import Image from "next/image";
import {
  ChangeEvent,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../components/redux/reducers/product";
import { CompanyTypes, ProductTypes, ResponseTypes } from "../types/product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaWhatsapp } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";


interface ProductProps {
  data: ResponseTypes;
}

const Home: React.FC<ProductProps> = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  const [valueSort, setValueSort] = useState("nothing");
  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state.product);
  const [dataProduct, setDataProduct] = useState<ProductTypes[]>(
    data.data[0].Products
  );

  useEffect(() => {
    if (selector.product.length === 0) {
      dispatch(setProduct(data.data));
    }
  }, [dispatch]);

  const handleSortProduct = (id: number) => {
    const data = selector.product.find((item: CompanyTypes) => item.id === id);
    setValueSort("nothing");
    setDataProduct(data.Products);
  };

  const changeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    let result;

    if (value === "high") {
      result = dataProduct.slice().sort((a, b) => b.percentage - a.percentage);
      setDataProduct(result);
    } else if (value === "low") {
      result = dataProduct.slice().sort((a, b) => a.percentage - b.percentage);
      setDataProduct(result);
    }

    setValueSort(value);
  };

  return (
    <div className="bg-gradient-to-r from-red-800 to-red-700">
      <Head>
        <title>
          YOUSLOT88 Situs Judi Slot Online Terpercaya Resmi di Indonesia
        </title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="description"
          content="YOUSLOT88 RTP SLOT terpercaya dan terbaik dengan game judi online terlengkap seperti judi bola serta YOUSLOT88 live casino online bandar judi bola terbesar di Indonesia yang online24jam."
        />
        <meta
          name="Keywords"
          content="rtp, rtp slot, dadu online, slot gacor, rolet online, slot online, judi online, daftar slot online, 1 klik bet, YOUSLOT88, bandar bola, agen bola, judi bola, roulette online, casino online, kasino online, baccarat online, sabung ayam, sabung ayam online"
        />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="id_ID" />
        <meta name="googlebot" content="index,follow" />
        <meta name="geo.country" content="id" />
        <meta name="language" content="id-ID" />
        <meta name="distribution" content="global" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="author" content="YOUSLOT88" />
        <meta name="publisher" content="YOUSLOT88" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta
          property="og:title"
          content="YOUSLOT88 Situs Judi Slot Online Terpercaya Resmi di Indonesia"
        />
        <meta
          property="og:description"
          content="YOUSLOT88 situs judi slot online terpercaya dan terbaik dengan game judi online terlengkap seperti judi bola serta YOUSLOT88 live casino online bandar judi bola terbesar di Indonesia yang online24jam."
        />
        <meta property="og:url" content="https://rtpslotjp.net" />
        <meta property="og:site_name" content="YOUSLOT88" />
        <meta property="og:image:alt" content="Slot Gacor" />
      </Head>
      <div className="container md:max-w-[960px] mx-auto px-3 py-5">
        <div className="text-center ">
          <Image src="/logo.png" height={70} width={200} />
        </div>
        <a href="https://youslot88.net/"
          target="_blank"
          rel="noopener noreferrer" className="w-full">
          <Image src="/banner.png" height={260} width={960} />
        </a>
        <div className="flex flex-col md:flex-row md:space-y-0 space-y-3 space-x-0 md:space-x-5 my-5">
            <a className="animate-bounce w-full md:w-1/2 text-center bg-green-400 py-3 rounded-md text-white font-semibold shadow-md shadow-green-500" href="https://youslot88.net/home?register" rel="noopener noreferrer" target="_blank">DAFTAR SEKARANG</a>
            <a className="w-full md:w-1/2 text-center bg-yellow-400 py-3 rounded-md text-gray-500 font-semibold shadow-md shadow-green-500 flex justify-center items-center" href="https://secure.livechatinc.com/licence/1288461/v2/open_chat.cgi?groups=0" rel="noopener noreferrer" target="_blank"><TiMessages size={20} className="mr-3 text-gray-500"/> LIVECHAT</a>
         
        </div>
        <div className="px-6">
          <Slider {...settings} className="flex items-center">
            {selector.product.map((item: CompanyTypes) => {
              return (
                <button
                  key={item.id}
                  onClick={() => handleSortProduct(item.id)}
                >
                  <Image
                    src={`https://rtpslotjp.net/${item.images}`}
                    width={100}
                    height={100}
                  />
                </button>
              );
            })}
          </Slider>
        </div>
        <div className="w-full flex space-x-2 my-4">
          <p className="text-white">Filter : </p>
          <select
            onChange={changeSort}
            value={valueSort}
            className="text-center px-3 border border-slate-700"
          >
            <option disabled value="nothing">
              Pilih Filter
            </option>
            <option value="high">Tertinggi</option>
            <option value="low">Terendah</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-3 shadow-lg shadow-red-900 bg-red-900 rounded-md">
          {dataProduct.map((item: ProductTypes) => {
            return (
              <a
                href="https://youslot88.net/"
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
                className="p-3 border border-white rounded-md"
              >
                <Image
                  src={`https://rtpslotjp.net/${item.images}`}
                  width={200}
                  height={150}
                  placeholder="blur"
                  blurDataURL="/logo.svg"
                />
                <div className="w-full bg-gray-200 rounded-full">
                  <div
                    className={`${item.percentage > 60
                        ? "bg-green-500"
                        : item.percentage > 30
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      } text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full my-2`}
                    style={{ width: item.percentage + "%" }}
                  >
                    {item.percentage}%
                  </div>
                </div>
                <p className="text-white text-center">{item.name}</p>
              </a>
            );
          })}
        </div>
        <div className="mt-3 border border-yellow-400 p-3 rounded-md text-white text-justify md:text-left">
          <h1 className="mb-3 text-2xl font-bold">
            <a
              href="https://youslot88.net/"
              target="_blank"
              rel="nofollow noreferrer"
              className="text-yellow-400"
            >
              YOUSLOT88
            </a>{" "}
            Agen Slot Gacor Terbaik & Terpercaya Bonus New Member
          </h1>
          <p>
            Selamat datang di{" "}
            <a
              href="https://youslot88.net/"
              target="_blank"
              rel="nofollow noreferrer"
              className="text-yellow-400"
            >
              YOUSLOT88
            </a>
            , situs slot online gacor terbaik dan terpercaya di Indonesia saat
            ini. Kami menyediakan beragam jenis pilihan permainan slot online
            yang seru dan menghibur. Beragam jenis permainan slot terbaik dari
            beragam provider slot ternama dunia. Beragam jenis permainan slot
            gacor yang mudah dimainkan dan juga mudah dikalahkan tersedia di
            sini. Pemain akan dapatkan keuntungan besar setiap harinya dengan
            lebih mudah.
          </p>
          <p className="mt-2">
            Layanan permainan judi slot online terbaik akan memberikan
            pengalaman bermain yang jauh lebih enak, nyaman dan pastinya juga
            akan jauh lebih menguntungkan setiap harinya. Ratusan jenis
            permainan slot pun bisa dipilih dan dimainkan dengan mudah. Beragam
            jenis permainan slot terbaik dari provider judi slot terpercaya di
            dunia. Pemain bebas memilih dan memainkan jenis game slot yang
            mereka ingin mainkan sesuai kegemaran mereka sendiri.
          </p>
          <p className="my-2">
            Beragam fitur lengkap bisa digunakan untuk bermain dan dapatkan
            banyak keuntungan dalam bermain. Pemain akan dimanjakan dengan
            beragam jenis fitur yang disediakan. Semua kebutuhan para pemain
            akan dapat didapatkan dengan mudah di dashboard masing-masing
            pemain. Fitur lengkap memungkinkan setiap pemain untuk dapat bermain
            secara maksimal dan menangkan uang hingga jutaan setiap harinya.
          </p>
          <h1 className="mb-3 text-2xl font-bold">
            Situs Slot Pragmatic Play Terpopuler dengan Winrate Terbesar
          </h1>
          <p className="mt-2">
            Provider pragmatic play menawarkan permainan judi slot online paling
            menarik dengan winrate terbesar dai antara semua provider slot
            lainnya yang ada saat ini. Sebagai situs judi online terpercaya,{" "}
            <a
              href="https://youslot88.net/"
              target="_blank"
              rel="nofollow noreferrer"
              className="text-yellow-400"
            >
              YOUSLOT88
            </a>
            menyediakan beragam jenis permainan slot lengkap dari pragmatic play
            untuk memberikan pengalaman bermain dan taruhan judi slot yang lebih
            menyenangkan. Menangkan taruhan setiap hari dengan mudah.
          </p>
          <p className="mt-2">
            Slot pragmatic play merupakan salah satu permainan terbaik yang ada
            di situs kami. Permainan ini menyajikan permainan dengan kualitas
            terbaik serta dengan dukungan server yang handal. Pemain akan dapat
            bermain dan melakukan taruhan judi dengan lebih enak dan nyaman.
            Pragmatic play juga termasuk salah satu provider slot paling
            menguntungkan. Karena mereka dapat memberikan winrate yang besar,
            sehingga pemain akan lebih mudah meraih keuntungan.
          </p>
          <p className="my-2">
            Dapatkan banyak cuan dengan bermain slot sangat mudah didapatkan
            jika Anda bermain dengan menggunakan game slot dari pragmatic. Modal
            kecil pun tidak masalah, Anda bisa menangkan taruhannya dengan mudah
            meski modal yang digunakan itu kecil. Sebaliknya, jackpot jutaan
            ditawarkan oleh pragmatic, sehingga keuntungan pemain akan jauh
            lebih besar.
          </p>
          <h1 className="mb-3 text-2xl font-bold">
            Agen Slot Gacor dengan Jackpot Terbesar di Indonesia
          </h1>
          <p>
            <a
              href="https://youslot88.net/"
              target="_blank"
              rel="nofollow noreferrer"
              className="text-yellow-400"
            >
              YOUSLOT88
            </a>{" "}
            adalah situs dengan game slot gacor terbanyak di situs online saat
            ini. Beragam jenis permainan slot dengan maxwin tinggi bisa
            didapatkan dan dimainkan dengan mudah oleh para pemain judi online.
            Menangkan taruhan setiap hari dengan mudah tanpa ada tantangan dan
            rintangan yang berarti. Mereka (pemain judi) akan dapatkan
            keuntungan besar setiap harinya, meski mereka masih pemula.
          </p>
          <p className="mt-2">
            Slot gacor adalah jenis permainan slot yang mudah dimainkan dan juga
            mudah dikalahkan. Pemain profesional pasti akan memilih dan
            memainkan game judi slot online gacor untuk memaksimalkan keuntungan
            yang mereka dapatkan. Dengan demikian, pemain bisa mendapatkan angka
            kemenangan yang lebih besar setiap harinya. Bahkan modal yang mereka
            keluarkan pun akan lebih kecil. Hanya dengan modal 50 ribu pun bisa
            dapatkan hingga jutaan.
          </p>
          <p className="my-2">
            Setiap provider game slot online memiliki beragam jenis permainan
            slot gacor yang bisa dipilih oleh setiap pemain. Namun sayangnya,
            tidak semua orang tahu jenis permainan slot gacor tersebut. Tidak
            jarang masih banyak pula pemain yang sering mengalami kekalahan
            ketika bermain. Hal ini karena pemain tidak memilih permainan slot
            dengan tepat.
          </p>
          <h1 className="mb-3 text-2xl font-bold">
            9 Pilihan Provider Slot Terbaik dengan RTP Tertinggi
          </h1>
          <p className="mb-2">
            Permainan slot online memiliki beragam jenis genre permainan menarik
            yang ditawarkan oleh banyak provider. Beragam provider ini
            menawarkan permainan slot yang keren, seru dan menghibur. Bahkan
            beragam jenis simbol permainan slot online yang mudah dikalahkan pun
            bisa Anda temukan. Untuk bisa menang, pemain harus jeli memilih dan
            menentukan jenis game slot dengan RTP tinggi agar bisa menang dengan
            mudah.
            <a
              href="https://youslot88.net/"
              target="_blank"
              rel="nofollow noreferrer"
              className="text-yellow-400"
            >
              YOUSLOT88
            </a>{" "}
            sebagai provider slot online ternama menyediakan beragam jenis
            permainan slot online dengan RTP tinggi dari beragam provider
            ternama dunia.
          </p>
          <h2 className="text-lg text-yellow-400">1. Pragmatic Play</h2>
          <p>
            Pragmatic play adalah salah satu permainan terbaik yang ada di dunia
            judi online. Di provider slot online yang satu ini pemain akan
            temukan banyak jenis permainan yang bisa memberikan mereka banyak
            keuntungan.
          </p>
          <h2 className="mt-2 text-lg text-yellow-400">2. Joker Gaming</h2>
          <p>
            Joker gaming merupakan provider slot ternama yang menyediakan
            beragam pilihan slot dengan winrate tinggi. Di samping bisa
            mendapatkan hiburan yang menarik, pemain juga bisa menangkan
            taruhannya dengan mudah. Meski pemula, tapi bisa dapatkan peluang
            menang yang besar di sini.
          </p>
          <h2 className="mt-2 text-lg text-yellow-400">3. Habanero Slot</h2>
          <p>
            Habanero menawarkan permainan slot yang lebih seru dan penuh dengan
            tantangan. Di sini para pemain akan dihadapkan dengan beragam jenis
            permainan slot yang akan mereka sukai. Selain itu, habanero juga
            memiliki banyak koleksi permainan slot yang mudah dimainkan dan juga
            mudah sekali dikalahkan.
          </p>
          <h2 className="mt-2 text-lg text-yellow-400">4. AFB Slot</h2>
          <p>
            AFB slot menawarkan beragam pilihan permainan slot online yang cukup
            menarik dan juga menjanjikan untuk dimainkan. Menangkan uang jutaan
            setiap hari dengan mudah melalui permainan slot AFB. Selain itu,
            slot online dari AFB ini juga sangat seru dimainkan dan juga punya
            tampilan yang friendly.
          </p>
          <h2 className="mt-2 text-lg text-yellow-400">5. Playstar Slot</h2>
          <p>
            Playstar Slot hadirkan beragam pilihan permainan slot yang cukup
            seru dan juga cukup menarik untuk dimainkan. Di sini pemain bisa
            mendapatkan kemenangan yang besar. Dengan strategi terbaik dan modal
            yang lebih kecil pemain bisa menang dalam setiap putarannya.
          </p>
          <h2 className="mt-2 text-lg text-yellow-400">6. Playtech Slot</h2>
          <p>
            Playtech Slot menjadi permainan slot paling menguntungkan bagi
            pemain. Permainan slot dari Playtech Slot terkenal begitu sangat
            seru dan juga menjanjikan. Permainan ini memberikan banyak
            keuntungan bagi pemain. Di mana mereka bisa menangkan taruhan dengan
            mudah.
          </p>
          <h2 className="mt-2 text-lg text-yellow-400">7. PG Soft</h2>
          <p>
            PG slot merupakan salah satu permainan slot unik dan cukup menarik
            dimainkan. Permainan slot yang satu ini selain seru dimainkan juga
            dapat memberikan keuntungan besar bagi pemain. beragam permainannya
            seru dan mudah dikalahkan. Pemain tentu akan dapat dengan mudah
            memenangkan setiap permainannya.
          </p>
          <h2 className="mt-2 text-lg text-yellow-400">8. CQ9 Slot</h2>
          <p>
            CQ9 merupakan permainan slot dengan maxwin besar, diciptakan untuk
            memberikan kepuasan bagi para pemain judi online. Pemain pemula akan
            mendapatkan keuntungan yang besar setiap kali mereka bermain.
            Menangkan taruhan tentu akan sangat mudah setiap harinya.
          </p>
          <h2 className="mt-2 text-lg text-yellow-400">9. JDB Slot</h2>
          <p>
            Walau tidak begitu populer di kalangan para pemain judi besar,
            faktanya ada banyak juga permainan slot online menarik di provider
            slot yang satu ini. Ada banyak game slot gacor yang dapat dipilih
            dan dimainkan dengan mudah oleh para pemain-pemainnya.
          </p>
          <h1 className="mt-2 mb-3 text-2xl font-bold">
            Keuntungan Bermain Judi Slot Pragmatic di{" "}
            <a
              href="https://youslot88.net/"
              target="_blank"
              rel="nofollow noreferrer"
              className="text-yellow-400"
            >
              YOUSLOT88
            </a>
          </h1>
          <p className="mb-2">
            Bermain dan melakukan taruhan judi slot online di{" "}
            <a
              href="https://youslot88.net/"
              target="_blank"
              rel="nofollow noreferrer"
              className="text-yellow-400"
            >
              YOUSLOT88
            </a>{" "}
            adalah pilihan yang tepat. Anda akan dapatkan banyak keuntungan
            ketika bermain dan melakukan taruhan judi di sini. Pemain judi
            online dengan modal kecilpun bisa didapatkan setiap hari. Selain
            jackpot besar, pemain juga bisa dapatkan beragam jenis bonus
            permainan yang menarik. Dengan bonus permainan ini, bettor akan
            dapat bermain dan melakukan taruhan dengan lebih mudah.
          </p>
          <p>
            Pemain bisa bermain kapan saja,{" "}
            <a
              href="https://youslot88.net/"
              target="_blank"
              rel="nofollow noreferrer"
              className="text-yellow-400"
            >
              YOUSLOT88
            </a>{" "}
            akan selalu online selama 24 jam non stop dengan proses deposit dan
            withdraw 1 menit dengan ratusan jenis permainan slot online yang
            bisa dipilih sesuai dengan selera para pemainnya. Winrate yang
            ditawarkan{" "}
            <a
              href="https://youslot88.net/"
              target="_blank"
              rel="nofollow noreferrer"
              className="text-yellow-400"
            >
              YOUSLOT88
            </a>{" "}
            juga sangat tinggi hingga 92%. Artinya pemain pemula sekalipun bisa
            menang dengan mudah. Sudah ada banyak pemain yang bergabung,
            sekarang tinggal giliran Anda, yuk daftar sekarang juga dan dapatkan
            beragam jenis bonus permainan yang menarik.
          </p>
        </div>
        <a href="https://api.whatsapp.com/send?phone=6282115490635&text=Halo%20Bos%2C%20Mau%20Transaksi%20Nih" target="_blank" rel="noreferrer nofollow" className="fixed bottom-8 md:right-10 right-3 bg-green-400 rounded-full p-3">
          <FaWhatsapp size={40} className="text-white" />
        </a>
        <div className="text-center text-white mt-10">
          <p>&copy; 2022 YOUSLOT88.NET All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const response = await fetch("https://rtpslotjp.net/api/product");
  const result = await response.json();
  return {
    props: {
      data: result,
    },
  };
}
