import { Footer, Avatar } from 'flowbite-react';
import { BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';

export default function Footerx() {
    return (
        <Footer container>
          <div className="w-full mt-5">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div>
                <Footer.Brand
                  href="https://pekauto.com"
                  src="/pekauto.png"
                  alt="Pekauto logo"
                  name="Pek Automotive"
                />
              </div>
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                  <Footer.Title title="Backend" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="https://www.djangoproject.com/"><Footer.Brand src="https://static.djangoproject.com/img/logos/django-logo-positive.svg" size="lg"/></Footer.Link>
                    <Footer.Link href="https://www.django-rest-framework.org/"><Footer.Brand src="https://www.django-rest-framework.org/img/logo.png" size="lg"/></Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Frontend" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="https://react.dev/"><Footer.Brand src="https://quintagroup.com/cms/js/js-image/react.js-logo.png" size="lg"/></Footer.Link>
                    <Footer.Link href="https://tailwindcss.com/"><Footer.Brand src="https://static.cdnlogo.com/logos/t/34/tailwind-css.svg" size="lg"/></Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Others" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="https://www.mysql.com/"><Footer.Brand src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png" size="lg"/></Footer.Link>
                    <Footer.Link href="https://www.docker.com/"><Footer.Brand src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8moNximUowV0NdyJZpOyJfYvYXKlqpwJ4rVQ50f6vVWyjS9ahXEK3fSZVsQOBgLqVQ&usqp=CAU" size="lg"/></Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright href="https://thisismaulana.vercel.app" by='Maulana Hasanudin ♥' year={new Date().getFullYear().toString()} />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="https://github.com/maurana" icon={BsGithub} />
                <Footer.Icon href="https://instagram.com/thisismaulana" icon={BsInstagram} />
                <Footer.Icon href="https://www.linkedin.com/in/thisismaulana" icon={BsLinkedin} />
              </div>
            </div>
          </div>
        </Footer>
      );
}