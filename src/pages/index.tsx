import { Meta, Main } from "@/layouts";

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="StablesPay"
          description="StablesPay is a decentralized stablecoin platform that allows you to earn interest on your stablecoins."
        />
      }
    >
      <h1 className="text-2xl">StablesPay</h1>
    </Main>
  );
};

export default Index;
