<template>
  <section id="home">
    <section class="home-content">
      <section class="text-side">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </section>
      <section class="img-side">
        <img
          src="../assets/svg/illustration-working.svg"
          alt="illustration working"
        />
      </section>
    </section>
  </section>
</template>

<style lang="scss" scoped>
#home {
  width: 100%;
  background: #fff;

  .home-content {
    max-width: 1440px;
    width: 100%;
    margin: auto;
    padding: 3rem 2rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 800px) {
      flex-direction: column-reverse;
      align-items: center;
    }

    @media (max-width: 560px) {
      padding: 3rem 1rem;
    }

    img {
      width: 100%;
      height: 100%;
    }

    .text-side,
    .img-side {
      max-width: 600px;
      width: 100%;
    }

    .text-side {
      @media (max-width: 800px) {
        text-align: center;
      }

      h1 {
        font-size: 4rem;
        line-height: 5rem;
        color: hsl(260, 8%, 14%);

        @media (max-width: 560px) {
          font-size: 3rem;
          line-height: 4rem;
        }
      }

      p {
        font-size: 1.23rem;
        color: hsl(0, 0%, 75%);
        margin-bottom: 2rem;

        @media (max-width: 800px) {
          margin-top: 20px;
        }

        @media (max-width: 560px) {
          font-size: 1rem;
          margin-bottom: 1rem;
        }
      }

      button {
        padding: 15px 45px;
        border: none;
        border-radius: 2rem;
        color: #fff;
        background: hsl(180, 66%, 49%);
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 1px;
        cursor: pointer;
        margin: auto;
        transition: background ease-in-out 500ms;

        &:hover {
          background: hsl(180, 66%, 70%);
        }

        @media (max-width: 560px) {
          padding: 15px 35px;
        }
      }
    }
  }
}
</style>
