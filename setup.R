if(!"pak" %in% installed.packages()){install.packages("pak")}
pak::pkg_install("callr")

stopifnot(grep("/nd.site$", getwd()))

callr::r(\(){
  renv::init()
})

callr::r(\(.conda_envname){
  .python_path <- reticulate::conda_create(envname=.conda_envname, python_version="3.10")
  reticulate::conda_install(envname=.conda_envname, packages="conda-forge::hugo")
  renv::use_python(.python_path, type="conda", name=.conda_envname)
}, args=list(.conda_envname="nd.util.condaenv"))

callr::r(\(.conda_envname){
  renv::snapshot(prompt=FALSE)
  yaml::read_yaml("environment.yml") |>
    purrr::discard_at("prefix") |>
    yaml::write_yaml("environment.yml")
})
