import Link from "next/dist/client/link"
import Head from "next/head"
import BlogSidebar from "../../components/BlogSidebar";
import styles from "../../styles/eachBlog.module.css";

const deleVsSiele = () => {
  return (
    <>
      <Head>
        <title>مقایسه DELE و SIELE آزمون های بین المللی زبان اسپانیایی</title>
      </Head>
      <div className={styles.blog}>
        <BlogSidebar/>
        <div className={styles.content}>
          <p>دله <b>DELE</b> و سیله <b>SIELE</b> آزمون های استاندارد تعیین سطح زبان اسپانیایی هستند که برای متقاضیانی که نیاز به مدرک رسمی برای احراز سطح زبان خود دارند طراحی شده است. آزمون DELE با تکیه بر قدمت و اعتبار موسسه سروانتس اسپانیا و دانشگاه های همکار در برگزاری آزمون، مدرک معتبر مادام العمر ارائه می کند و آزمون SIELE با امکان شرکت در آزمون و دریافت گواهی به صورت آنلاین و با ساختار بین المللی، مورد تایید بسیاری از سازمان ها و نهادها و دانشگاه های سراسر دنیا می باشد.</p>


          <p>در جدول زیر تلاش کرده ایم اصلی ترین پارامترهای هر دو آزمون را مورد بررسی و مقایسه قرار دهیم. در صورتی که نیاز به کسب اطلاعات بیشتر و دانستن جزییات آزمون های DELE و SIELE را دارید می توانید با کلیک بر لینک های زیر به صفحه مربوط به این آزمون ها در سایت اسپنیکا رجوع کنید:</p>


          <p><a href="http://www.spanika.uno/%d9%85%d8%b9%d8%b1%d9%81%db%8c-%d8%a2%d8%b2%d9%85%d9%88%d9%86-%d8%b2%d8%a8%d8%a7%d9%86-%d8%a7%d8%b3%d9%be%d8%a7%d9%86%db%8c%d8%a7%db%8c%db%8c-dele/">اطلاعات کامل آزمون <b>DELE </b></a><b>/ </b><a href="http://www.spanika.uno/siele-introduction/">اطلاعات کامل آزمون <b>SIELE</b></a><b> </b></p>


          <h2>جدول مقایسه آزمون های زبان اسپانیایی موسسه سروانتس DELE و SIELE</h2>

          <figure>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p><b>نوع آزمون</b></p>
                  </td>
                  <td>
                    <p><b>DELE</b></p>
                  </td>
                  <td>
                    <p><b>SIELE</b></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><b>شرح</b></p>
                  </td>
                  <td>
                    <p>دیپلم سطح زبان اسپانیایی بر اساس استاندارد اروپایی MCER سطوح A1, A2, B1, B2, C1, C2</p>
                  </td>
                  <td>
                    <p>گواهی سطح زبان اسپانیایی بر اساس استاندارد اروپایی MCER سطوح A1, A2, B1, B2, C1, C2</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><b>برگزار کننده</b></p>
                  </td>
                  <td>
                    <p>وزارت آموزش و پرورش و آموزش عالی اسپانیا به همراه موسسه سروانتس که از سال 2002 مدیریت برگزاری آزمون را بر عهده دارد</p>
                  </td>
                  <td>
                    <p>موسسه سروانتس، دانشگاه ملی مکزیک، دانشگاه سالامانکا، دانشگاه بوئنوس آیرس</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><b>سابقه</b></p>
                  </td>
                  <td>
                    <p>1989</p>
                  </td>
                  <td>
                    <p>2016</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><b>کشور برگزار کننده</b></p>
                  </td>
                  <td>
                    <p>اسپانیا</p>
                  </td>
                  <td>
                    <p>اسپانیا، مکزیک و آرژانتین</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><b>نحوه برگزاری</b></p>
                  </td>
                  <td>
                    <p>به صورت حضوری در مراکز آزمون سراسر دنیا</p>
                  </td>
                  <td>
                    <p>به صورت آنلاین در مراکز آزمون سراسر دنیا</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><b>اعتبار مدرک</b></p>
                  </td>
                  <td>
                    <p>دائم و بدون تاریخ انقضا</p>
                  </td>
                  <td>
                    <p>اعتبار ۵ ساله</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><b>اعتبار بین المللی</b></p>
                  </td>
                  <td>
                    <p>دارای اعتبار بین المللی در سیستم های آموزشی کشورهای مختلف، موسسات، شرکت ها، دانشگاه ها و غیره در داخل و خارج اسپانیا</p>
                  </td>
                  <td>
                    <p>دارای اعتبار بین المللی برای موسسات آموزش عالی و دانشگاه ها</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><b>محدوده سنی</b></p>
                  </td>
                  <td>
                    <p>دانش‌آموزان، جوانان و بزرگسالان</p>
                  </td>
                  <td>
                    <p>جوانان و بزرگسالان</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><b>روش برگزاری</b></p>
                  </td>
                  <td>
                    <p>در مراکز امتحانی، به صورت کتبی و با کمک دفترچه سوالات و پاسخنامه</p>
                  </td>
                  <td>
                    <p>در مراکز امتحانی، به صورت آنلاین و با کمک رایانه و با هماهنگی نهاد برگزار کننده</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><b>مراکز برگزاری آزمون</b></p>
                  </td>
                  <td>
                    <p>بیش از هزار مرکز آزمون در بیش از صد کشور در دنیا</p>
                  </td>
                  <td>
                    <p>در حال حاضر این شبکه دارای بیش از 1000 مرکز آزمون در جهان است. به صورت مستمر مراکز جدید در حال اضافه شدن هستند. بروزترین لیست مراکز در سایت: <a href="https://www.siele.org/">https://www.siele.org/</a></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><b>انواع لهجه های اسپانیایی</b></p>
                  </td>
                  <td>
                    <p>بله، در آزمون های سطوح بالاتر DELE B1، B2، C1 و C2.</p>
                  </td>
                  <td>
                    <p>بله، در کل امتحان و در تمامی سطوح</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><b>رعایت استانداردهای بین المللی در صدور گواهینامه</b></p>
                  </td>
                  <td>
                    <p>بله</p>
                  </td>
                  <td>
                    <p>بله</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><b>تعداد امتحانات و سطوح</b></p>
                  </td>
                  <td>
                    <p>دارای سطح های مختلف است:</p>
                    <p>شش امتحان برای بزرگسالان: A1-C2.</p>
                    <p>دو امتحان برای دانش آموزان: A1-A2/B1</p>
                    <p>متقاضی سطح مورد نظر را انتخاب کرده و مدرک همان سطح را دریافت می کند.</p>
                  </td>
                  <td>
                    <p>سطح بندی ندارد و سطح آزمون برای بزرگسالان از A1 تا C1 ادغام شده است و سطح متقاضی پس از شرکت در آزمون تعیین می گردد.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><b>سوالات آزمون</b></p>
                  </td>
                  <td>
                    <p>درک مطلب</p>
                    <p>توانایی شنیداری</p>
                    <p>آزمون نوشتاری</p>
                    <p>مصاحبه شفاهی</p>
                  </td>
                  <td>
                    <p>درک مطلب</p>
                    <p>توانایی شنیداری</p>
                    <p>آزمون نوشتاری</p>
                    <p>مصاحبه شفاهی </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><b>اعلام نتایج آزمون</b></p>
                  </td>
                  <td>
                    <p>قبول یا عدم قبول در سطحی که داوطلب در آن امتحان می دهد.</p>
                  </td>
                  <td>
                    <p>نتیجه آزمون از مقیاس هزار امتیازی و همچنین معادل سطوح استاندارد اروپایی MCER بیان می شود.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><b>نوع گواهی صادر شده</b></p>
                  </td>
                  <td>
                    <p>صدور گواهینامه الکترونیکی با اعتبار رسمی و صدور مدرک رسمی برای داوطلبان پذیرفته شده</p>
                  </td>
                  <td>
                    <p>صدور گواهی رسمی برای آزمون کامل و یا آزمونهای تکی و ترکیبی</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><b>زمان ارسال نتایج</b></p>
                  </td>
                  <td>
                    <p>حدود سه ماه</p>
                  </td>
                  <td>
                    <p>حداکثر سه هفته</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </figure>
        </div>
      </div>
    </>
  )
}

export default deleVsSiele