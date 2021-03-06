assert.dom('.foo').hasValue('bar');
assert.dom('.foo').hasValue('bar');

assert.dom('.foo').hasValue('bar', 'custom message');
assert.dom('.foo').hasValue('bar', 'custom message');

assert.dom('.foo', '.parent-scope').hasValue('bar');
assert.dom('.foo', '.parent-scope').hasValue('bar');

assert.equal(find('input:first').value, 'bar');

assert.equal(find('.foo'), 'bar');

assert.equal(true);