const container = document.querySelector(".grid");

axios
  .get("https://www.episodate.com/api/most-popular?page=1")
  .then((response) => {
    const tvShows = response.data.tv_shows;

    tvShows.forEach((tvShow) => {
      const {
        image_thumbnail_path: imageThumbnailPath,
        name,
        country,
        network,
        start_date: startDate,
        status,
      } = tvShow;

      const item = `<div class="item">
        <div class="content">
          <div class="thumb-nail">
            <img
              src=${imageThumbnailPath}
              alt=${name}
            />
          </div>
          <div class="info">
            <div class="title">${name}</div>
            <ul class="details">
              <li>Country: ${country}</li>
              <li>Network: ${network}</li>
              <li>Start Date: ${startDate}</li>
              <li>Status: ${status}</li>
            </ul>
          </div>
        </div>
      </div>`;

      container.innerHTML += item;

      resizeAllGridItems();
    });
  })
  .catch((err) => console.log(err));
