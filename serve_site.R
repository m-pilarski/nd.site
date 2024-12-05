serve_hugo <- function(.condaenv_path, .port){

  .hugo_path <- fs::path(.condaenv_path, "bin", "hugo")

  processx::run(.hugo_path, wd=here::here("hugo"))

  on.exit({.hugo_server$kill()})

  .hugo_server <- processx::process$new(
    .hugo_path,
    args=c(
      "server",
      "--port", .port,
      "--buildDrafts",
      "--buildFuture"
    ),
    wd=here::here("hugo")
  )

  utils::browseURL(paste0("http://localhost:", .port))

  Sys.sleep(Inf)

}

serve_hugo(condaenv_path, 13377)