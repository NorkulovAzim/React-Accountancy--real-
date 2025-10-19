import Sale from "../assets/70.svg";

const Finance = () => {
  return (
    <section>
      <div className="container">
        <div className="finance-wrapper">
          <div className="finance-img">
            <img src={Sale} alt="Sale" />
          </div>

          <div className="finance-text">
            <h2>
              The best finance <br /> stack for <br /> entrepreneurs
            </h2>
            <p>
              70% of companies switch to us from their DIY or legacy system.
              Now, get your bookkeeping, tax prep and CFO problems, solved.
              Complete our contact form, and find out why 9 out of 10 customers
              recommend us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finance;
