# odin-foundations
A complete portfolio of all work done throughout The Odin Project's Foundations curriculum.

# Miscellaneous Notes

## Merging of previous repositories
Previously, each project was self-contained in its own repository.
At the end of the Foundations course, all projects were merged into this odin-foundations repo. 

The following commands were used:
```cd a
git filter-repo --to-subdirectory-filter a
cd ..
cd b
git remote add a ../a
git fetch a
git merge --allow-unrelated-histories a/master
git remote remove a
```
Credit and thanks to newren and the [git-filter-repo](https://github.com/newren/git-filter-repo).