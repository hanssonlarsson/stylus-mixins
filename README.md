# stylus-mixins: A Collection of Useful Mixins for Stylus

## Installation

    npm install https://github.com/gasi/stylus-mixins/tarball/master


## Development

    git clone https://github.com/gasi/stylus-mixins.git stylus-mixins
    cd stylus-mixins
    npm link


## Usage

1. Add `stylus-mixins` to stylus's paths:

    ```javascript
    stylus(content).set('paths', [require('stylus-mixins')]).render(...)
    ```



2. Use `stylus-mixins` in your `.styl` files:

    ```
    @import mixins
    div
        border-radius(3px)
    ```

## License

This library is licensed under the [Apache License, Version 2.0][license].


## Acknowledgements

Thanks for the great foundation, [@brunch](https://github.com/brunch) and [@hanssonlarsson](https://github.com/hanssonlarsson).


## Reporting Issues

If you encounter any bugs or other issues, please file them in the
[issue tracker][issue-tracker].


[issue-tracker]: https://github.com/gasi/stylus-mixins/issues
[license]: http://www.apache.org/licenses/LICENSE-2.0.html
