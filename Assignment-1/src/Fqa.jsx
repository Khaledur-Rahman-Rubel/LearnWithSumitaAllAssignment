import FqaSvg2 from "./component/svg/FqaSvg2";
import FqaPart from "./FqaPart";

const Fqa = () => {
  return (
    <>
      <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  FAQ
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Any Questions? Look Here
                </h2>
                <p className="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <FqaPart
                heading="Is This a Beutiful Country para  ??"
                para="That
                    includes the in-depth research & creation of your monthly
                    content ui/ux strategy that we do writing your first blog
                    post.It takes 2-3 weeks to get your first blog post ready."
              />
              <FqaPart
                heading="Is This a Beutiful world para ??"
                para="That
                    includes the in-depth research & creation of your monthly
                    content ui/ux strategy that we do writing your first blog
                    post.It takes 2-3 weeks to get your first blog post ready."
              />
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <FqaPart
                heading=" Is TailGrids Well-documented? ??"
                para="It takes 2-3 weeks to get your first blog post ready. That
                    includes the in-depth research & creation of your monthly
                    content ui/ux strategy that we do writing your first blog
                    post."
              />
              <FqaPart
                heading=" Is React Well-documented? ??"
                para="It takes 2-3 weeks to get your first blog post ready. That
                    includes the in-depth research & creation of your monthly
                    content ui/ux strategy that we do writing your first blog
                    post."
              />
            </div>
          </div>
        </div>
        <div>
          <span className="absolute left-4 top-4 -z-1">
            <FqaSvg2 />
          </span>
          <span className="absolute bottom-4 right-4 -z-1">
            <FqaSvg2 />
          </span>
        </div>
      </section>
    </>
  );
};

export default Fqa;
