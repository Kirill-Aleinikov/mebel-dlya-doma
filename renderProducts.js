const productsContainer = document.querySelector('#products-container');

getProducts();

async function getProducts() {
    const response = await fetch('products.json');
    const productsArray = await response.json();
	renderProducts(productsArray);
}

    function renderProducts(productsArray) {
        productsArray.forEach(function (item) {
            const productHTML = `   <div class="product" data-id="${item.id}>
                                        <span class="">
                                            <div>
                                                <img src="img/${item.imgSrc}" alt="товар">
                                            </div>
                                        </span>
                                        <div class="label">
                                            <span>
                                                ${item.title}
                                            </span>
                                            <div>
                                                ${item.info}
                                            </div>
                                                <div class="price">
                                                    <span> ${item.price} ₽</span>
                                                    <span> ${item.sale} ₽</span>
                                                </div>
                                            <a>
                                                Подробнее
                                            </a>
                                        </div>
                                    </div>`;
            productsContainer.insertAdjacentHTML('beforeend', productHTML);
        });
        $('.products').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
          });
          $('.news-info').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
          });
    }
